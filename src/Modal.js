import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

/**
 *  @function
 *  @returns {JSX.Element}
 */
const Modals = () => (
    ReactDOM.createPortal(
            <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
            </Modal.Content>
        </Modal>,
        document.querySelector("#modal")
    )
)

export default Modals