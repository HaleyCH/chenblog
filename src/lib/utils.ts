import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// 定义 Post 类型
export interface Post {
  draft?: boolean;
  pinned?: boolean;
  date?: Date | string;
  [key: string]: any;
}

// 过滤掉所有 draft:true 的文章（可选支持开发环境预览草稿）
export function getAvailablePosts(posts: Post[]) {
  return posts.filter((post) => post.data.draft != true);
}

// 获得置顶 posts
export function getPinnedPosts(posts: Post[]) {
  return posts.filter((post) => post.data.pinned === true);
}

// 获得非置顶 posts
export function getNonPinnedPosts(posts: Post[]) {
  return posts.filter((post) => !post.data.pinned);
}

// 按发布时间降序排序
export function sortPostsByDate(posts: Post[]) {
  return posts.slice().sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).valueOf() : 0;
    const dateB = b.data.date ? new Date(b.data.date).valueOf() : 0;
    return dateB - dateA;
  });
}

// 合并置顶和非置顶 posts，且各自内部按时间降序
export function getSortedPosts(posts: Post[]) {
  const pinnedPosts = sortPostsByDate(getPinnedPosts(posts));
  console.log("Pinned posts:", pinnedPosts);
  const nonPinnedPosts = sortPostsByDate(getNonPinnedPosts(posts));
  return [...pinnedPosts, ...nonPinnedPosts]; // 合并数组
}

// 一步到位：获得可用且已排序的 posts（生产环境不含 draft，置顶优先，按时间降序）
export function getDisplayPosts(posts: Post[], { includeDrafts = false } = {}) {
  const available = getAvailablePosts(posts);
  return getSortedPosts(available);
}
