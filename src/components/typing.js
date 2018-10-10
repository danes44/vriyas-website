import React from 'react'
import Typewriter from 'typewriter-effect'

const Typing = () => (
	<Typewriter
		options={{
    	strings: [			'Hello',
			'Konnichiwa',
			'Bonjour',
			'Aloha',
			'Namaste',
			'Annyeonghaseyo',
			'Ni hao',
			'Xin chao'],
    	autoStart: true,
    	loop: true,
  		}}
	/>
)

export default Typing
