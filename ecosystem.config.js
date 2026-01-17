module.exports = {
	apps: [{
		name: "tweet-scheduler",
		script: "./scripts/scheduler.js",
		watch: false,
		env: {
			"NODE_ENV": "production",
		},
		 error_file: "/home/ubuntu/apps/gotravel/logs/tweet-scheduler-error.log",
		 out_file: "/home/ubuntu/apps/gotravel/logs/tweet-scheduler-out.log",
		 log_date_format: "YYYY-MM-DD HH:mm:ss",
	   }]
}
