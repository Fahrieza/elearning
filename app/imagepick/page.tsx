'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const CameraCapture = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let stream;

    const enableCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    enableCamera();

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    // kode pengambilan gambar

    // Navigasi ke halaman baru
    router.push('/question');
  };

  return (
    <div>
    <img className="absolute inset-x-2 top-0 w-40 h-auto" src="logopt.png"></img>
    <div className="relative flex items-center justify-center">
        <div className="relative bg-white shadow-2xl p-4 rounded-xl">
          <video ref={videoRef} autoPlay muted playsInline style={{ transform: 'scaleX(-1)' }} />
          <div className='pt-4'>
            <button onClick={captureImage} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ambil Gambar</button>
          </div>
           {/* <canvas ref={canvasRef} style={{ display: 'none' }} /> */}
        </div>
    </div>
    </div>
  );
};

export default CameraCapture;

