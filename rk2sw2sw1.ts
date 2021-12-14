namespace psw_steam {
    /**
     * TFW-SW1で出力をコントロールします。
     * @param duty set the duty-ratio, eg: 100
     */
    //% blockId=sw1_out
    //% block="出力を%duty|\\%にする"
    //% duty.min=0 duty.max=100
    //% group="SW1"
    //% weight=60
    export function sw1_out(duty: number): void {
        pins.analogWritePin(AnalogPin.P0, (duty / 100 * 1023));
    }
}
