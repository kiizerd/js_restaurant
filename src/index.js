import { getHeader } from './displayHeader'

const content = document.getElementById('content')

const header = getHeader()

content.append(header)

