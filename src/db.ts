import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory')

db.exec(`
  CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`)

db.exec(`
  CREATE TABLE product (
    id INTEGER PRIMARY KEY,
    name TEXT,
  )
`)

db.exec(`
  CREATE TABLE cart (
    id INTEGER,
    user_id INTEGER
  )
  `)
