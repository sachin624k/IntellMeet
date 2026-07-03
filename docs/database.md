# Database Design

## Collections

---

## User

- name
- email
- password
- avatar
- role
- createdAt

---

## Meeting

- title
- description
- host
- participants
- roomId
- meetingStatus
- startTime
- endTime

---

## Message

- sender
- meetingId
- message
- createdAt

---

## Summary

- meetingId
- summary
- actionItems

---

## Task

- meetingId
- title
- assignedTo
- status

---

## Notification

- receiver
- message
- type
- read