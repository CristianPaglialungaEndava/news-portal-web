export interface GetStoriesRequestDto {
    page?: number;
    pageSize?: number;
    criteria?: SearchCriteria;
}

export interface SearchCriteria {
    title?: string;
    storyType?: string;
}