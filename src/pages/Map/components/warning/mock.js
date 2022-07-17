export const mockMapList = (time) => {
    console.log('time', time)
    if (!time || time == 'hour') {
        return [{
                name: '上海市',
                alarmTotal: 113124,
                processedAlarmNum: 333,
                pendingAlarmNum: 112791
            },
            {
                name: '四川省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            },
            {
                name: '河南省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            {
                name: '山东省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            },
        ]
    }
    if (time == 'today') {
        return [{
                name: '上海市',
                alarmTotal: 120000,
                processedAlarmNum: 1100,
                pendingAlarmNum: 118900
            }, {
                name: '四川省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            },
            {
                name: '河南省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            {
                name: '山东省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            },
            {
                name: '湖南省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }
        ]
    }
    if (time == 'yesterday') {
        return [{
                name: '上海市',
                alarmTotal: 220000,
                processedAlarmNum: 2100,
                pendingAlarmNum: 217900
            }, {
                name: '四川省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            },
            {
                name: '河南省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            {
                name: '山东省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            },
            {
                name: '湖南省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {
                name: '广东省',
                alarmTotal: 800,
                processedAlarmNum: 700,
                pendingAlarmNum: 100
            }
        ]
    }
    if (time == 'week') {
        return [{
                name: '上海市',
                alarmTotal: 1892342,
                processedAlarmNum: 235500,
                pendingAlarmNum: 1656842
            }, {
                name: '四川省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            },
            {
                name: '河南省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            {
                name: '山东省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            },
            {
                name: '湖南省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {
                name: '广东省',
                alarmTotal: 800,
                processedAlarmNum: 700,
                pendingAlarmNum: 100
            }, {
                name: '河北省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {}
        ]
    }
    if (time == 'month') {
        return [{
                name: '上海市',
                alarmTotal: 302322442,
                processedAlarmNum: 124729423,
                pendingAlarmNum: 177593019
            }, {
                name: '四川省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            },
            {
                name: '河南省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            {
                name: '山东省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            },
            {
                name: '湖南省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {
                name: '广东省',
                alarmTotal: 800,
                processedAlarmNum: 700,
                pendingAlarmNum: 100
            }, {
                name: '江苏省',
                alarmTotal: 480,
                processedAlarmNum: 20,
                pendingAlarmNum: 460
            }, {
                name: '河北省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {
                name: '安徽省',
                alarmTotal: 1000,
                processedAlarmNum: 100,
                pendingAlarmNum: 900
            }, {
                name: '陕西省',
                alarmTotal: 8,
                processedAlarmNum: 7,
                pendingAlarmNum: 1
            }, {
                name: '福建省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
            , {
                name: '辽宁省',
                alarmTotal: 80,
                processedAlarmNum: 7,
                pendingAlarmNum: 73
            },
        ]
    }
    
};