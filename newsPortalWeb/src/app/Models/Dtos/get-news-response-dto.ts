export interface GetStoriesResponseDto {
    countTotal: number;
    prevPage?: number | null;
    nextPage?: number | null;
    results: StoryDto[];
}

export interface StoryDto {
    id: number;
    title: string;
    url:string;
}
