/** @babel */
/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Copyright 2017-2018 Andres Mejia <amejia004@gmail.com>. All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { clearDiv, createHorizontalLine } from './utils'

class XTerminalDeleteProfileElementImpl extends HTMLElement {
	initialize (model) {
		this.model = model
		this.model.setElement(this)
		this.messageDiv = document.createElement('div')
		this.messageDiv.classList.add('x-terminal-modal-message')
		this.appendChild(this.messageDiv)
		this.appendChild(createHorizontalLine())
		this.promptButtonsDiv = document.createElement('div')
		this.promptButtonsDiv.classList.add('x-terminal-modal-buttons-div')
		this.appendChild(this.promptButtonsDiv)
	}

	setNewPrompt (profileName, confirmHandler, cancelHandler) {
		clearDiv(this.messageDiv)
		clearDiv(this.promptButtonsDiv)
		const text = 'Delete existing profile \'' + profileName + '\'?'
		this.messageDiv.appendChild(document.createTextNode(text))
		const confirmButton = document.createElement('button')
		confirmButton.classList.add('x-terminal-modal-button')
		confirmButton.appendChild(document.createTextNode('Confirm'))
		confirmButton.addEventListener('click', confirmHandler, { passive: true })
		this.promptButtonsDiv.appendChild(confirmButton)
		const cancelButton = document.createElement('button')
		cancelButton.classList.add('x-terminal-modal-button')
		cancelButton.appendChild(document.createTextNode('Cancel'))
		cancelButton.addEventListener('click', cancelHandler, { passive: true })
		this.promptButtonsDiv.appendChild(cancelButton)
	}
}

const XTerminalDeleteProfileElement = document.registerElement('x-terminal-delete-profile', {
	prototype: XTerminalDeleteProfileElementImpl.prototype,
})

export {
	XTerminalDeleteProfileElement,
}