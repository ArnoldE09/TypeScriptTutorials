export class Post {
  id: number | undefined;
  userId?: number;
  title: string = '';
  body: string = '';
  

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.userId) this.id = initializer.userId;
    if (initializer.title) this.title = initializer.title;
    if (initializer.body) this.body = initializer.body;
    }
}