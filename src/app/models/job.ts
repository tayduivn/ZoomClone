export class Job {
    jobID: number = 0;
    name: string = '';
    description: string = '';
    postedBy: string = '';
    createdAt: Date = new Date();
    isAvailable: boolean = false;
}

export class OfferAnswerClass{
    mysdp!: RTCSessionDescriptionInit;
    username: string = "";
}
