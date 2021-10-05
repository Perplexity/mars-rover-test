const { test, expect } = require("@jest/globals");
const { execute } = require("./mars-rover");

describe('mars-rover.execute', () => {
	test('should stay at origin', () => {
		expect(execute()).toEqual("0:0:N");
	});

	test('should move north', () => {
		expect(execute("M")).toEqual("0:1:N");
		expect(execute("MM")).toEqual("0:2:N");
	});

	test('should wrap around when moving north', () => {
		expect(execute("MMMMMMMMMM")).toEqual("0:0:N");
		expect(execute("MMMMMMMMMMMM")).toEqual("0:2:N");
	});

	test('should rotate left', () => {
		expect(execute('L')).toEqual('0:0:W');
		expect(execute('LL')).toEqual('0:0:S');
		expect(execute('LLL')).toEqual('0:0:E');
		expect(execute('LLLL')).toEqual('0:0:N');
		expect(execute('LLLLL')).toEqual('0:0:W');
	});

	test('should rotate right', () => {
		expect(execute('R')).toEqual('0:0:E');
		expect(execute('RR')).toEqual('0:0:S');
		expect(execute('RRR')).toEqual('0:0:W');
		expect(execute('RRRR')).toEqual('0:0:N');
		expect(execute('RRRRR')).toEqual('0:0:E');
	})

	test('should move east', () => {
		expect(execute("RM")).toEqual("1:0:E");
		expect(execute("RMM")).toEqual("2:0:E");
	})

	test('should wrap around when moving east', () => {
		expect(execute("RMMMMMMMMMM")).toEqual('0:0:E');
		expect(execute("RMMMMMMMMMMMM")).toEqual('2:0:E');
	});

	test('should move south', () => {
		expect(execute('RRM')).toEqual('0:9:S');
		expect(execute('RRMM')).toEqual('0:8:S');
		expect(execute('RRMMMMMMMMMM')).toEqual('0:0:S');
		expect(execute('RRMMMMMMMMMMM')).toEqual('0:9:S');
	})

	test('should move west', () => {
		expect(execute("LM")).toEqual("9:0:W");
		expect(execute("LMM")).toEqual("8:0:W");
	});

	test('should move given multiple direction and movement commands', () => {
		expect(execute("MMRMMLM")).toEqual("2:3:N");
	})
});