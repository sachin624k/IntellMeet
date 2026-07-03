# Backend API

## Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

PUT /api/auth/profile

---

## Meeting

POST /api/meetings

GET /api/meetings

GET /api/meetings/:id

PUT /api/meetings/:id

DELETE /api/meetings/:id

---

## Chat

GET /api/chat/:meetingId

POST /api/chat/send

---

## AI

POST /api/ai/summary

---

## Task

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id