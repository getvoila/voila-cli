const BaseCommand = require('../base')
const {runTask} = require('../../lib/task-runner')
const CliError = require('../../lib/error/cli-error')
const errorMessages = require('../../lib/error/messages')

class SetCommand extends BaseCommand {
  async run() {
    const {flags, args} = this.parse(SetCommand)

    const tasks = [
      {
        action: ctx => {
          if (this.storage.get('settings', args['key'])) {
            this.storage.set('settings', args['key'], args['value'])
          } else {
            throw new CliError(errorMessages.STORAGE_SETTINGS_KEY_DOESNT_EXIST)
          }
        }
      }
    ]

    await runTask(tasks)
  }
}

SetCommand.description = `Set a Voila setting.`

SetCommand.args = [
  {
    name: 'key',
    required: true,
    description: 'Name of the setting.'
  },
  {
    name: 'value',
    required: true,
    description: 'New value of the setting.'
  }
]

SetCommand.hidden = false

module.exports = SetCommand
