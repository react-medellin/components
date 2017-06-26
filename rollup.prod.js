const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const flow = require('rollup-plugin-flow');
const replace = require('rollup-plugin-replace');
const { minify } = require('uglify-es');
const pkg = require('./package.json');

const plugins = [
	resolve(),
	babel({
		exclude: 'node_modules/**',
		plugins: ['external-helpers']
	}),
	flow(),
	replace({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	commonjs(),
	// Since we're using ES modules we need this _hack_
	// https://github.com/TrySound/rollup-plugin-uglify#warning
	uglify({}, minify)
];

const config = {
	banner: `/* react-med-lib version ${pkg.version} */`,
	footer: '/* Join our community! https://meetup.com/React-Medellin */',
	entry: 'src/index.js',
	moduleName: 'ReactMedLib',
	targets: [
		{
			dest: pkg.main,
			format: 'umd',
			sourceMap: true
		},
		{
			dest: pkg.module,
			format: 'es',
			sourceMap: true
		}
	],
	external: [
		'react'
	],
	globals: {
		react: 'React'
	},
	plugins
};

module.exports = config;
