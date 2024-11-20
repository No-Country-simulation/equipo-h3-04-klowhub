'use client';
import { useState, useRef } from 'react';

const VideoAudioExtractor = () => {
    const [audioUrl, setAudioUrl] = useState('');
    const [status, setStatus] = useState('');
    const audioRef = useRef(null);

    const handleVideoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (!file) return;

        try {
            setStatus('Procesando video...');

            // elemento de video temporal
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);

            // Espera que el video esté listo
            await new Promise((resolve) => {
                video.onloadedmetadata = resolve;
            });

            // contexto de audio
            const audioContext = new window.AudioContext();
            const mediaElement = audioContext.createMediaElementSource(video);

            // destino para la grabación
            const destination = audioContext.createMediaStreamDestination();
            mediaElement.connect(destination);

            // MediaRecorder para grabar el audio
            const mediaRecorder = new MediaRecorder(destination.stream);
            const chunks: BlobPart[] = [];

            mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/wav' });
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                setStatus('Audio extraído con éxito');
            };

            // Iniciar la grabación
            video.play();
            mediaRecorder.start();

            // Detener la grabación cuando termine el video
            video.onended = () => {
                mediaRecorder.stop();
                video.remove();
            };
        } catch (error) {
            setStatus('Error al procesar el video: ' + error);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                    Selecciona un archivo de video
                </label>
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="w-full p-2 border rounded"
                />
            </div>

            {status && (
                <div className="my-4 p-2 bg-gray-100 rounded">
                    {status}
                </div>
            )}

            {audioUrl && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Audio extraído:</h3>
                    <audio ref={audioRef} controls src={audioUrl} className="w-full" />
                    <a
                        href={audioUrl}
                        download="audio-extraido.wav"
                        className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Descargar Audio
                    </a>
                </div>
            )}
        </div>
    );
};

export default VideoAudioExtractor;