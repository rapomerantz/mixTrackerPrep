const sont = {
    songId: 1,
    songName: 'My First Song',
    tempo: 120,
    devices: [
        {
            deviceId: 1,
            deviceOrder: 1,
            deviceType: 'mixer',
            deviceName: 'Mixer',
            deviceChannels: [
                {
                    channelId: '1',
                    channelOrder: '1',
                    channelName: 'Kick Drum',
                    channelComponents: [
                        {
                            componentId: 1,
                            componentOrder: 1,
                            componentName: 'Tone',
                            componentType: 'knob',
                            componentValue: -50
                        },
                        {
                            componentId: 2,
                            componentOrder: 2,
                            componentName: 'Level',
                            componentType: 'fader',
                            componentValue: 75
                        }
                    ]
                }
            ]
        },
        {
            deviceId: 2,
            deviceOrder: 2,
            deviceType: 'rack',
            deviceName: '1176 Compressor',
            deviceChannels: [
                {
                    channelId: '2',
                    channelName: '',
                    channelComponents: []
                }
            ]
        }
    ]
};

console.log('hello');

class DeviceComponent {
    constructor(id, order, type, name) {
        this.id = id;
        this.order = order;
        this.type = type;
        this.name = name;
    }
}

class Mixer extends DeviceComponent {
    constructor(id, order, type, name, channels) {
        super (id, order, type, name, channels);
        this.channels = channels;
    }

    describeMixer() {
        console.log(this);
    }
    getChannels() {
        console.log(`This mixer has ${this.channels} channels`);
    }
    addChannel() {
        this.channels = this.channels + 1;
        console.log(`Added a new channel to ${this.name}, there are now ${this.channels} channels`)
    }
    removeChannel() {
        this.channels = this.channels - 1;
        console.log(`Removed a channel from ${this.name}, there are now ${this.channels} channels`)
    }
}

let myMixer = new Mixer(1, 1, 'mixer', 'My Mixer', 1);
myMixer.getChannels();
myMixer.addChannel();