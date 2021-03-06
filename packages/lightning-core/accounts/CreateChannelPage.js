import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'lightning-forms'
import { actions } from './reducer'

import { CurrencyInput, Head, Input, Page } from '../common'

export const CreateChannelPage = ({ createChannel, push }) => {
  const fields = [
    {
      name: 'ip',
      placeholder: 'Pubkey@HostIP',
      required: true,
      component: Input,
    },
    {
      name: 'amount',
      placeholder: 'Amount',
      required: true,
      component: CurrencyInput,
    },
  ]

  const handleSuccess = ({ ip, amount }, clear) => {
    createChannel({ ip, amount })
      .then(() => {
        clear()
        push('/accounts')
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  }

  return (
    <Page>
      <Head
        title="Create Channel"
        body="Channels are like tubes of money used to transfer funds within Lightning"
      />
      <Form
        name="create-channel"
        fields={ fields }
        submitLabel="Create Channel"
        clearLabel="Cancel"
        onSuccess={ handleSuccess }
      />
    </Page>
  )
}

export default connect(
  () => ({}), {
    createChannel: actions.createChannel,
    push: actions.push,
  },
)(CreateChannelPage)
