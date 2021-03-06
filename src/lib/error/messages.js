module.exports = {
  CONFIG_ALREADY_EXISTS: `".voila" already exists. Run "voila init --force" to overwrite.`,
  NO_CONFIG: `Can't find ".voila". Initialize Voila with "voila init" first.`,
  DEFINE_STACKS: `Define stacks in ".voila/stacks" first.`,
  SPECIFY_STACK_NAME: `Specify stack name.`,
  STACK_NOT_FOUND: `Stack not found.`,
  SPECIFY_COMMAND: `Specify command to run.`,
  SSH_SESSION_INTERRUPTED: `SSH session was interrupted unexpectedly.`,
  EXEC_INTERRUPTED: `Command execution interrupted unexpectedly.`,
  STACK_PATH_NOT_ABSOLUTE: `"stackPath" in the stack config file has to be an absolute path.`,
  VOLUME_STACK_PATH_INSIDE_STACK_PATH: `"stackPath" can not be mounted inside of another "stackPath"`,
  HOST_DIR_OUTSIDE_PROJECT: `"hostPath" has to be inside the current project.`,

  DOCKERFILE_DOESNT_EXIST: `Dockerfile doesn't exist.`,
  DOCKERFILE_OUTSIDE_PROJECT: `Dockerfile path has to be inside the current project.`,

  STACK_NAME_INVALID: `Stack name has to be a non-empty alphanumeric string ("-" and "_" characters are allowed).`,
  STACK_NAME_EXISTS: `Stack name already exists.`,

  STORAGE_TABLE_DOESNT_EXIST: `Table doesn't exist in the local storage.`,
  STORAGE_SETTINGS_KEY_DOESNT_EXIST: `Key doesn't exist in the settings.`,

  JOB_ISNT_RUNNING: `Job isn't running.`,
  JOB_DOESNT_EXIST: `Job doesn't exist.`,
  jobDoesntExistAfterRestart: (job) => `Can't find log for job "${job.id}"`,

  stackNotRunningError: stackName => {
    return `Stack "${stackName}" is not running. Start it with "voila start ${stackName}" first.`
  },

  configExistsInParentError: path => `You can't initialize new Voila projects inside of an existing project. ".voila" was found in "${path}".`,

  multipleConfigsWarning: (paths, loadedFolder) => {
    const pathList = paths.map(p => `${p}\n`).join('')

    return `Multiple ".voila" config folders were detected in the following directories:\n\n` +
      `${pathList}\n\n` +
      `Loading the top level folder: ${loadedFolder}`
  },

  wrongStackHostDirError: directory => {
    return `Stack access only allowed in the mounted stack directory: ${directory}`
  },

  stopStackBeforeProceeding: stack => {
    return `Stack "${stack}" is currently running. Stop it with "voila stop ${stack}" first`
  },

  COMMAND_NO_FOUND: `Specify a configured run command with "--run-command".`
}
