import { Textarea, Stack, Button } from '@chakra-ui/react'
// import { sendForm } from 'emailjs-com'

export default function Contact() {
    // sendForm
    return (
        <body>
            {/* <div className='row'> */}
            <Stack className='msg'>
                <Textarea id='text' placeholder='send a message to me' size='lg'></Textarea>
                <Button onClick={window.open('mailto:yunze2@illinois.edu')}>Submit</Button>
            </Stack>
            {/* </div> */}
            
        </body>
    )
}