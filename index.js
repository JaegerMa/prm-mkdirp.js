'use strict';

const mkdirp = require('mkdirp');

function prm_mkdirp(dir, opts, cb)
{
	if(cb === undefined && typeof(opts) === 'function')
	{
		cb = opts;
		opts = undefined;
	}

	return new Promise((resolve, reject) =>
	{
		mkdirp(dir, opts, (err) =>
		{
			if(cb)
				cb(err);
			
			err ? reject(err) : resolve();
		});
	});
}

prm_mkdirp.sync = mkdirp.sync;

module.exports = prm_mkdirp;
