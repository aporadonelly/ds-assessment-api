**Use Case: Parents sign in with homeroom and student information**

Description: 
Allows the parent to sign in to the remote teacher-parent conference system using the homeroom name, student number, and associated pictures (corresponding to the selected nouns provided such as orange, mango, etc.).
If the information is valid, the parent is directed to a waiting queue page indicating that the conference will start soon. If the information is invalid, the parent is prompted to retry.


Input: 
Homeroom name (string), 
Student number (integer)
2 pictures corresponding to the selected nouns (array of strings)



Preconditions: 
The parent has received the necessary information from the student's teacher.
The homeroom name, student number, and corresponding pictures are valid and exist in the system.
The conference slot has not yet passed.


Output in case of success: 
If the input data is valid, the parent is directed to a waiting queue page indicating that the conference will start soon.


Output in case of error: 	
If the parent attempts to sign in too soon, the system asks them to retry at the due time.
If the parent attempts to sign in too late, the system informs them that their conference slot has passed.
If anyone attempts to sign in with invalid information, the system prompts them to retry
An error message is displayed, indicating that the sign-in failed.


Acceptance criteria:

Given a valid homeroom name, student number, and corresponding pictures, the system should allow the parent to sign in to the waiting queue of a conference.
		Valid:
Input: valid homeroom name, valid student number, and correct associated pictures
Expected output: Sign-in success, waiting queue page displayed.

Given an invalid homeroom name or student number, the system should prompt the parent to retry.
Invalid Input 
Input: Invalid homeroom name
Expected output: sign-in failure, error message displayed

Input: invalid student number
Expected output: sign-in failure, error message displayed

Given incorrect or invalid pictures, the system should prompt the parent to retry.
Input: incorrect associated pictures
Expected output: sign-in failure, error message displayed.

====================================================================================================

**Use Case: Handle Login Errors**

Description:
This use case describes the scenario where a user attempts to sign in to the waiting queue of the conference but provides invalid information.


Input:
Homeroom name
Student number
2 pictures (corresponding to the selected nouns)

Preconditions:
The user has attempted to sign in to the waiting queue of the conference.
The provided information is invalid.

Output in case of success:
The user is prompted to retry signing in with valid information.

Output in case of error:
An error message is displayed to the user stating that the information provided is invalid and they need to retry signing in.
Acceptance Criteria:
Given a user/parent who attempts to sign in to the waiting queue of the conference with an invalid homeroom name, student number, or pictures, when they click the ‘Join the Conference’ button, then an error message is displayed stating that the information provided is invalid and they need to retry signing in.

Given a user who attempts to sign in too early or too late, when they click the ‘Join the Conference’ button, then an error message is displayed stating that their conference slot has either not yet started or has already passed, and they need to retry signing in at the correct time.

Given a user who attempts to sign in with valid information, when they click the ‘join the conference’ button, then they are redirected to a ‘waiting queue’ page that indicates the conference will start soon.

Given a user who is prompted to retry signing in with valid information, when they enter valid information and click the ‘join the conference’ button, then they are redirected to a ‘waiting queue’ page that indicates the conference will start soon.




====================================================================================================
**
Use Case: Prevent sign-in before start time**

Description: 
Prevents the parent from signing in to the system before the start time of their conference slot.

Input: 
Attempted sign-in before start time. 

Preconditions: 
The parent has signed in to the system with valid information.

Output in case of success: 
The parent is informed that their sign-in is too early and re-try in due time.

Output in case of error: 
The parent is taken to the waiting queue page.

Acceptance criteria:
Input: sign-in attempt 10 minutes before start time
Expected output: sign-in failure, ask to retry in due time. 



====================================================================================================

**Use Case: Parents attempt to sign-in too late**

Description: 
Prevents the parent from signing in to the system after the start time of their conference slot.

Input: 
Attempted sign-in after start time. 

Preconditions: 
The parent has signed in to the system with valid information.

Output in case of success: 
The parent is informed that the conference has passed.

Output in case of error: 
The parent is taken to the login page.

Acceptance criteria:
Input: sign-in attempt 5 minutes after the start time
Expected output: tell the parent their conference slot has passed. 

====================================================================================================



Use Case: Plan parent-teacher conference slot

Description: 
Allows the teacher to plan a parent-teacher conference slot in the system.

Input: 
Homeroom class name, student number, and two random nouns.

Preconditions: 
The teacher has access to the system and the necessary information to plan the slot.

Output in case of success: 
The slot is created in the system with the provided information.

Output in case of error: 
An error message is displayed, indicating that the slot creation failed.

Acceptance criteria:
	Valid: 
Input: valid homeroom class name, valid student number, and two valid random nouns
Expected output: slot creation success, information available for parents to sign in

		Invalid input:
Input: invalid homeroom class name
Expected output: slot creation failure, error message displayed

Input: invalid student number
Expected output: slot creation failure, error message displayed

Input: invalid random nouns
Expected output: slot creation failure, error message displayed

