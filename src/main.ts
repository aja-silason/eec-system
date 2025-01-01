import * as SerialPort from 'serialport';

interface EEGData {
    data: ArrayBuffer;
}

const port = new SerialPort('COM3', {
    baudRate: 115200,
});

port.on('open', () => {
    console.log('Porta serial aberta e conectada ao dispositivo EEG.');
});

port.on('data', (data: ArrayBuffer) => {
    const eegData: EEGData = { data };
    console.log('Dados recebidos:', eegData.data);
});

port.on('error', (err: Error) => {
    console.error('Erro na comunicação serial:', err.message);
});

