class Book {
	constructor(
		id, 
		title, 
		pageCount, 
		publishedDate, 
		thumbnailUrl, 
		shortDescription, 
		longDescription, 
		status, 
		authors
	) {
		this._id = id;
		this.title = title;
		this.pageCount = pageCount;
		this.publishedDate = publishedDate;
		this.thumbnailUrl = thumbnailUrl;
		this.shortDescription = shortDescription;
		this.longDescription = longDescription;
		this.status = status;
		this.authors = authors;
	}
}