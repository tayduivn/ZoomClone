export class Job {
    jobID: number = 0;
    languageID: number = 0;
    name: string = '';
    description: string = '';
    postedBy: string = '';
    acceptedBy: string = '';
    acceptedAt!: Date;
    createdAt: Date = new Date();
    jobState!: number;
    cancellationReason!: string;
    jobType!: number;
    startDateTime!: Date;
    endDateTime!: Date;
    duration!: any;
    locationName!: string;
    timeAgo!: string;
    isPast = true;
}

export class OfferAnswerClass{
    mysdp!: RTCSessionDescriptionInit;
    username: string = "";
}
