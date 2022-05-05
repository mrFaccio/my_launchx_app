const MissionCommander = require('../app/missionComander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander('Lenin');
        expect(myMissionCommander.name).toBe('Lenin');
    });
})