import React from 'react'
import { Input } from 'reactstrap'

export default function Search({ updateSearchQuery }) {
	return <Input type="text" name="file" onChange={e => updateSearchQuery(e.target.value)} />
}
