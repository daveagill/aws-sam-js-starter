const app = require('./app.js');
const axios = require('axios');

jest.mock('axios');

describe('Tests index', function () {
    it('verifies successful response', async () => {
        axios.mockResolvedValue({
            data: '  planet earth  '
        });

        const result = await app.lambdaHandler();

        expect(result.statusCode).toBe(200);

        const response = JSON.parse(result.body);
        expect(response.message).toBe('goodbye world');
        expect(response.location).toBe('planet earth');
    });
});
