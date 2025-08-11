Guestbook feature notes

Environment variables required (client-side):
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID

Firestore rules (basic public read, authenticated write):

service cloud.firestore {
  match /databases/{database}/documents {
    match /guestbookEntries/{docId} {
      allow read: if true;
      allow create: if request.auth != null &&
        request.resource.data.name is string &&
        request.resource.data.uid == request.auth.uid &&
        request.resource.data.message is string &&
        request.resource.data.message.size() > 0 &&
        request.resource.data.message.size() <= 500 &&
        request.resource.data.createdAt is number;
      allow update, delete: if false;
    }
  }
}

Indexes: none required for orderBy(createdAt) alone.

Remember to enable Google sign-in in Firebase Console → Authentication.
