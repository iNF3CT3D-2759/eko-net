export default interface HwInterface {
    type: string,
    adapter_type: string,       // audio | optical | radio | microwave
    adapter_device_id:  string,
    frequency: number,          // Hz
    tx_delay: number,           // Millis
    rx_delay: number,           // Millis
    noise_threshold: number,    // dB
}

const iFaces: HwInterface[] = [
    {
        type:               'UHF',
        adapter_type:       '3.5mm',
        adapter_device_id:  '1a1b:0001',
        frequency:          462500000,  // Hz
        tx_delay:           3000,       // Millis
        rx_delay:           3000,       // Millis
        noise_threshold:    70,         // dB
    },{
        type:               'audio',
        adapter_type:       '3.5mm',
        adapter_device_id:  '1a1b:0001',
        frequency:          20000,      // Hz
        tx_delay:           200,        // Millis
        rx_delay:           200,        // Millis
        noise_threshold:    70,         // dB
    },{
        type:               'optical',
        adapter_type:       'usb',
        adapter_device_id:  '1d6b:0003',
        frequency:          20000,      // Hz
        tx_delay:           200,        // Millis
        rx_delay:           200,        // Millis
        noise_threshold:    70,         // dB
    }
]

export const getInterfaces = () => {
    
}