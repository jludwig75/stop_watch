TimeState = { STOPPED : 0, RUNNING : 1, PAUSED : 2 };
function StopWatch()
{
	this.startTime = 0;
	this.cummulativeTime = 0;
	this.state = TimeState.STOPPED;
	this.runningTime = function()
	{
		return this.getCurrentTime() - this.startTime;
	};
	this.elapsedTime = function()
	{
		var time = this.cummulativeTime;
		if (this.state == TimeState.RUNNING)
		{
			time += this.runningTime();
		}
		
		return time;
	};
	this.start = function()
	{
		this.startTime = this.getCurrentTime();
		this.state = TimeState.RUNNING;
	};
	this.stop = function()
	{
		this.cummulativeTime += this.runningTime();
		this.startTime = 0;
		this.state = TimeState.PAUSED;
		
	};
	this.reset = function()
	{
		this.startTime = 0;
		this.cummulativeTime = 0;
		this.state = TimeState.STOPPED;
	};
	this.canStart = function()
	{
		return this.state != TimeState.RUNNING;
	};
	this.canStop = function()
	{
		return this.state == TimeState.RUNNING;
	};
	this.canReset = function()
	{
		return this.state == TimeState.PAUSED;
	};
	this.getCurrentTime = function()
	{
		d = new Date();
		return d.getTime();
	};
}

function zeroPad(num, width)
{
	numStr = "" + num;
	while (numStr.length < width)
	{
		numStr = "0" + numStr;
	}
	
	return numStr;
}
