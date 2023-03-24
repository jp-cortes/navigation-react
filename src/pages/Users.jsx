import React from 'react'
import { Link } from '../components/Link'
export function Users() {
  return (
    <div>
        <Link content="Home" toPage="/"/>
        <Link content="About" toPage="/about"/>
        <h1>Users</h1>
        <div>
          <ol>
            <li>User 1</li>
            <li>User 2</li>
            <li>user 3</li>
            <li>User 4</li>
            <li>User 5</li>
            <li>User 6</li>
          </ol>
        </div>
        </div>
  )
}
