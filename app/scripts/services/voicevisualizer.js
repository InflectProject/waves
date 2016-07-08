'use strict';

/**
 * @ngdoc service
 * @name wavesApp.voiceVisualizer
 * @description
 * # voiceVisualizer
 * Service in the wavesApp.
 */
angular.module('wavesApp')
  .service('voiceVisualizer', ['$window', function ($window) {
      $window.navigator.getUserMedia = ($window.navigator.getUserMedia ||
                            $window.navigator.webkitGetUserMedia ||
                            $window.navigator.mozGetUserMedia ||
                            $window.navigator.msGetUserMedia);
  
      // set up forked web audio context, for multiple browsers
      // window. is needed otherwise Safari explodes
  
      var audioCtx = new ($window.AudioContext || $window.webkitAudioContext)();
      // var voiceSelect = document.getElementById("voice");
      var source;
      var stream;
  
      //set up the different audio nodes we will use for the app
      var analyser = audioCtx.createAnalyser();
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.smoothingTimeConstant = 0.85;
  
      var distortion = audioCtx.createWaveShaper();
      var gainNode = audioCtx.createGain();
      var biquadFilter = audioCtx.createBiquadFilter();
      var convolver = audioCtx.createConvolver();
      
      var canvas,
          canvasCtx,
          intendedWidth, 
          drawVisual;
      
      var WIDTH;
      var HEIGHT;

      return {
        init: function( cnvs ){
          // set up canvas context for visualizer
          canvas = cnvs;
          canvasCtx = cnvs.getContext("2d");
          intendedWidth = document.querySelector('.visualizer-wrapper').clientWidth;
          canvas.setAttribute('width', intendedWidth);
          canvas.setAttribute('height', 400);

          //main block for doing the audio recording
          if ($window.navigator.getUserMedia) {
            console.log('getUserMedia supported.');
            $window.navigator.getUserMedia ( 
              { audio: true },
              function(stream) {
                source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyser);
                analyser.connect(distortion);
                distortion.connect(biquadFilter);
                biquadFilter.connect(convolver);
                convolver.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                $window.cancelAnimationFrame(drawVisual);
              },
              function(err) {
                console.log('The following gUM error occured: ' + err);
              });
          } else {
            console.log('getUserMedia not supported on your browser!');
          }
          this.visualize();
          return this;
        }, 
        visualize: function (){
          WIDTH = canvas.width;
          HEIGHT = canvas.height;
          // var visualSetting = 'sinewave';

          analyser.fftSize = 2048;
          var bufferLength = analyser.fftSize;

          var dataArray = new Uint8Array(bufferLength);

          canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

          function draw() {
            drawVisual = requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = 'rgb(255, 255, 255)';
            canvasCtx.beginPath();

            var sliceWidth = WIDTH * 1.0 / bufferLength;
            var x = 0;

            for(var i = 0; i < bufferLength; i++) {
              var v = dataArray[i] / 128.0;
              var y = v * HEIGHT/2;
              if(i === 0) {
                canvasCtx.moveTo(x, y);
              } else {
                canvasCtx.lineTo(x, y);
              }
              x += sliceWidth;
            }
            canvasCtx.lineTo(canvas.width, canvas.height/2);
            canvasCtx.stroke();
          };

          draw();
        }
      }
    }]);
