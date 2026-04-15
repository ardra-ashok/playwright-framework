module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: [
      'src/step-definitions/LoginSteps.ts',
      'src/hooks/hooks.ts',
      'src/fixtures/world.ts',
    ],
    requireModule: ['ts-node/register'],
    timeout: 60000,
    format: ['summary'],
  },
}