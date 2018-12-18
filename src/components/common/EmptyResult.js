import React from 'react'
import { Alert } from 'reactstrap'

export default function EmptyResult({ text }) {
  return <Alert color="dark">{text}</Alert>
}
