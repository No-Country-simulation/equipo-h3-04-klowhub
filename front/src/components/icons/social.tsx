export default function SocialIcon({ icon }: { icon: 'github' | 'facebook' | 'google' }) {
    switch (icon) {
        case 'github':
            return (
                <svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3211 0.538574C12.5112 0.538574 10.7191 0.895058 9.04695 1.58767C7.37484 2.28028 5.85551 3.29546 4.57573 4.57524C1.9911 7.15988 0.539063 10.6654 0.539062 14.3206C0.539063 20.4123 4.49451 25.5806 9.96599 27.4136C10.6551 27.5238 10.8756 27.0966 10.8756 26.7245V24.3953C7.05797 25.2222 6.24483 22.5485 6.24483 22.5485C5.61086 20.9498 4.71502 20.5226 4.71502 20.5226C3.46086 19.6681 4.8115 19.6956 4.8115 19.6956C6.1897 19.7921 6.92015 21.1152 6.92015 21.1152C8.11919 23.2101 10.1452 22.5899 10.9307 22.2591C11.0548 21.3633 11.4131 20.7568 11.799 20.4123C8.73938 20.0677 5.52816 18.8825 5.52816 13.6315C5.52816 12.1017 6.05188 10.8751 6.94772 9.89659C6.8099 9.55204 6.32752 8.1187 7.08554 6.25813C7.08554 6.25813 8.24323 5.88601 10.8756 7.6639C11.9644 7.36069 13.1496 7.20909 14.3211 7.20909C15.4926 7.20909 16.6778 7.36069 17.7666 7.6639C20.399 5.88601 21.5567 6.25813 21.5567 6.25813C22.3147 8.1187 21.8323 9.55204 21.6945 9.89659C22.5903 10.8751 23.1141 12.1017 23.1141 13.6315C23.1141 18.8963 19.8891 20.054 16.8157 20.3985C17.3118 20.8258 17.7666 21.6665 17.7666 22.9482V26.7245C17.7666 27.0966 17.9871 27.5376 18.69 27.4136C24.1615 25.5668 28.1032 20.4123 28.1032 14.3206C28.1032 12.5107 27.7467 10.7186 27.0541 9.04646C26.3615 7.37435 25.3463 5.85503 24.0665 4.57524C22.7867 3.29546 21.2674 2.28028 19.5953 1.58767C17.9232 0.895058 16.131 0.538574 14.3211 0.538574Z" fill="white" />
                </svg>

            )
        case 'facebook':
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.4621 14.0339C27.4621 6.58446 21.4314 0.538574 14.0006 0.538574C6.56983 0.538574 0.539062 6.58446 0.539062 14.0339C0.539062 20.5656 5.16983 26.0042 11.3083 27.2592V18.0824H8.61599V14.0339H11.3083V10.66C11.3083 8.05544 13.4218 5.93669 16.0198 5.93669H19.3852V9.98527H16.6929C15.9525 9.98527 15.3468 10.5926 15.3468 11.3348V14.0339H19.3852V18.0824H15.3468V27.4617C22.1448 26.7869 27.4621 21.0379 27.4621 14.0339Z" fill="white" />
                </svg>

            )
        case 'google':
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2779 12.072H27.2475C27.3906 12.8549 27.4621 13.6028 27.4621 14.3156C27.4621 16.8513 26.9195 19.1154 25.8342 21.1077C24.749 23.1001 23.2016 24.6572 21.192 25.779C19.1825 26.9008 16.8778 27.4617 14.2779 27.4617C12.4055 27.4617 10.6225 27.1082 8.92904 26.4012C7.23554 25.6942 5.7746 24.739 4.54622 23.5354C3.31783 22.3318 2.34288 20.9003 1.62135 19.241C0.899826 17.5817 0.539062 15.8347 0.539062 14.0001C0.539062 12.1655 0.899826 10.4185 1.62135 8.75923C2.34288 7.09991 3.31783 5.66845 4.54622 4.46486C5.7746 3.26126 7.23554 2.30599 8.92904 1.59902C10.6225 0.892056 12.4055 0.538574 14.2779 0.538574C17.8557 0.538574 20.9267 1.71295 23.4908 4.06171L19.7519 7.58485C18.285 6.19429 16.4604 5.49901 14.2779 5.49901C12.7394 5.49901 11.3172 5.87879 10.0113 6.63833C8.70543 7.39788 7.67085 8.42912 6.90758 9.73203C6.14431 11.035 5.76268 12.4576 5.76268 14.0001C5.76268 15.5426 6.14431 16.9653 6.90758 18.2682C7.67085 19.5711 8.70543 20.6023 10.0113 21.3619C11.3172 22.1214 12.7394 22.5012 14.2779 22.5012C15.3154 22.5012 16.2695 22.361 17.1401 22.0805C18.0107 21.8001 18.7263 21.4495 19.2868 21.0289C19.8474 20.6082 20.3363 20.1291 20.7537 19.5916C21.1711 19.054 21.4782 18.5457 21.675 18.0666C21.8718 17.5875 22.006 17.1318 22.0775 16.6994H14.2779V12.072Z" fill="white" />
                </svg>


            )
    }
}