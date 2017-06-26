const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const flow = require('rollup-plugin-flow');
const pkg = require('./package.json');

const plugins = [
	resolve(),
	commonjs(),
	babel({
		exclude: 'node_modules/**',
		plugins: ['external-helpers']
	}),
	flow()
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
		'react',
		'styled-components'
	],
	globals: {
		react: 'React',
		'styled-components': 'styled-components'
	},
	plugins
};

module.exports = config;
