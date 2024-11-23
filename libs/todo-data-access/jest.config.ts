export default {
  displayName: 'todo-data-access',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  passWithNoTests: true,
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/todo-data-access',
};
