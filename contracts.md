# Hovernest Backend API Contracts

## Overview
This document defines the API contracts between frontend and backend for the Hovernest website.

## Mocked Data in Frontend
Currently, all data is mocked in `/app/frontend/src/data/mockData.js`:
- Products, Programs, R&D streams, Gallery images
- Team members, Career roles, Blog posts
- FAQs, Resources, Testimonials
- Stats, Trust badges, Partner logos

## Backend Implementation Required

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "company": "string (required)",
  "useCase": "string (required)", 
  "timeline": "string (required)",
  "message": "string (required)",
  "formType": "string (optional, e.g., demo, pilot, program, career, internship)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Backend Logic:**
1. Validate all required fields
2. Store submission in MongoDB `contact_submissions` collection
3. Send email notification using Resend API to `brightensamuel@hovernest.com`
4. Queue for Google Sheets sync (stub for now)
5. Return success response

**MongoDB Schema:**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  company: String,
  useCase: String,
  timeline: String,
  message: String,
  formType: String,
  submittedAt: Date,
  status: String (pending/contacted/completed),
  emailSent: Boolean,
  syncedToSheets: Boolean
}
```

### 2. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "string (required)",
  "neuroFCUpdates": "boolean",
  "whitepaperAccess": "boolean"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscription successful"
}
```

**Backend Logic:**
1. Validate email format
2. Store in MongoDB `newsletter_subscriptions` collection
3. Queue for Mailchimp sync (stub for now)
4. Return success response

**MongoDB Schema:**
```javascript
{
  _id: ObjectId,
  email: String (unique),
  neuroFCUpdates: Boolean,
  whitepaperAccess: Boolean,
  subscribedAt: Date,
  syncedToMailchimp: Boolean,
  status: String (active/unsubscribed)
}
```

### 3. Integration Replay Queue (Future)
**Endpoint:** `POST /api/integration/replay` (protected)

**Purpose:** Flush queued submissions to Google Sheets and Mailchimp once API keys are configured

**Request Body:**
```json
{
  "service": "string (sheets|mailchimp|all)"
}
```

## Email Service Configuration (Resend)

**Environment Variables:**
- `RESEND_API_KEY`: API key for Resend
- `EMAIL_FROM`: info@hovernest.com
- `EMAIL_TO`: brightensamuel@hovernest.com
- `REPLY_TO`: info@hovernest.com

**Email Template (Contact Form):**
- Subject: `New Contact Form Submission - [Form Type]`
- Body: Include all form fields with proper formatting
- Send from: `info@hovernest.com`
- Reply-to: User's email from form

**Mock Behavior (when RESEND_API_KEY is empty):**
- Log email details to console
- Mark emailSent as false
- Store in database normally

## Frontend Integration Changes Required

### Remove Mock Data Dependencies
No changes needed! All pages currently use mock data from `mockData.js` which is perfect for the current implementation.

### Contact Form Integration
The Contact.js page already makes API calls to `/api/contact`. No changes needed.

## Testing Strategy

1. **Contact Form:**
   - Test with valid data → should store in DB
   - Test with invalid data → should return validation error
   - Test email sending (when key provided)

2. **Newsletter:**
   - Test duplicate email → should handle gracefully
   - Test validation

3. **Database:**
   - Verify data is stored correctly
   - Check indexes on email fields

## Future Enhancements
- Admin dashboard to view submissions
- Email templates with rich HTML
- Google Sheets real-time sync
- Mailchimp automation workflows
- File upload support for careers/internships
