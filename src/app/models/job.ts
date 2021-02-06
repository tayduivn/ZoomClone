export class Job {
    jobID: number = 0;
    name: string = '';
    description: string = '';
    postedBy: string = '';
    acceptedBy: string = '';
    acceptedAt!: Date;
    createdAt: Date = new Date();
    jobState!: number;
    cancellationReason!: string;
}

export class OfferAnswerClass{
    mysdp!: RTCSessionDescriptionInit;
    username: string = "";
}
