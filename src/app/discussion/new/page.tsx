"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  title: string;
  content: string;
  tags: string[];
}

// 错误类型
interface FormErrors {
  title?: string;
  content?: string;
  tags?: string;
}

const availableTags = [
  "イベント", "ガチャ", "攻略", "楽曲", "カード", "初心者",
  "難易度", "アップデート", "予想", "バグ報告", "質問", "ストーリー"
];

export default function NewDiscussionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    tags: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "タイトルは必須です";
    } else if (formData.title.length < 5) {
      newErrors.title = "タイトルは5文字以上必要です";
    }

    if (!formData.content.trim()) {
      newErrors.content = "内容は必須です";
    } else if (formData.content.length < 20) {
      newErrors.content = "内容は20文字以上必要です";
    }

    if (selectedTags.length === 0) {
      newErrors.tags = "最低1つのタグを選択してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // 更新form data with selected tags
    setFormData(prev => ({ ...prev, tags: selectedTags }));

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, you would submit to your backend here

      // Redirect to discussion page after successful submission
      router.push("/discussion");
    }, 1500);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const isSelected = prev.includes(tag);
      if (isSelected) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#f9fafb] to-[#e8f4f8]">
        <div className="container py-8">
          <div className="mb-4 flex items-center text-sm">
            <Link href="/discussion" className="text-[#58c7d5] hover:underline flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              掲示板に戻る
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-[#c9dde4] shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#daa2a8]"></div>
              <CardHeader className="bg-[#f0f9fc] border-b border-[#e8f4f8]">
                <CardTitle className="text-xl text-[#446398]">新規トピックを作成</CardTitle>
                <CardDescription>
                  プロジェクトセカイについて話し合いたいことを投稿しましょう
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="title" className="block text-sm font-medium">
                        タイトル<span className="text-red-500">*</span>
                      </label>
                      <div>
                        <Input
                          id="title"
                          placeholder="トピックのタイトルを入力"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className={`border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5] ${
                            errors.title ? "border-red-300" : ""
                          }`}
                        />
                        {errors.title && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-500"
                          >
                            {errors.title}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="tags" className="block text-sm font-medium">
                        タグ<span className="text-red-500">*</span>
                      </label>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {availableTags.map((tag, index) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.03 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                type="button"
                                variant={selectedTags.includes(tag) ? "default" : "outline"}
                                size="sm"
                                onClick={() => toggleTag(tag)}
                                className={
                                  selectedTags.includes(tag)
                                    ? "bg-[#58c7d5] hover:bg-[#446398]"
                                    : "border-[#c9dde4] hover:bg-[#e8f4f8] hover:text-[#446398]"
                                }
                              >
                                {tag}
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                        {errors.tags && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-500"
                          >
                            {errors.tags}
                          </motion.p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                          トピックに関連するタグを選択してください（複数選択可能）
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="content" className="block text-sm font-medium">
                        内容<span className="text-red-500">*</span>
                      </label>
                      <div>
                        <Textarea
                          id="content"
                          placeholder="トピックの内容を入力"
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          className={`min-h-[200px] border-[#c9dde4] focus:border-[#58c7d5] focus:ring-[#58c7d5] ${
                            errors.content ? "border-red-300" : ""
                          }`}
                        />
                        {errors.content && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-500"
                          >
                            {errors.content}
                          </motion.p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                          トピックの詳細情報や質問内容を詳しく記述してください
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <div className="flex space-x-3">
                        <Link href="/discussion">
                          <Button
                            type="button"
                            variant="outline"
                            className="border-[#c9dde4] text-[#446398] hover:bg-[#e8f4f8]"
                          >
                            キャンセル
                          </Button>
                        </Link>
                        <Button
                          type="submit"
                          className="relative overflow-hidden bg-[#58c7d5] hover:bg-[#446398] transition-all duration-300 min-w-[100px]"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10">
                            {isSubmitting ? "投稿中..." : "投稿する"}
                          </span>
                          {isSubmitting && (
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-[#58c7d5] via-[#cca65c] to-[#58c7d5]"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              style={{ opacity: 0.5 }}
                            />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card className="border-[#c9dde4]">
                <CardHeader className="py-3 px-4 bg-[#f0f9fc]">
                  <CardTitle className="text-sm font-medium text-[#446398]">投稿のガイドライン</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <motion.li
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      明確で具体的なタイトルをつけましょう
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      質問や議論のポイントを詳細に記述してください
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      適切なタグを選択して、関連するユーザーが見つけやすくしましょう
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      他のユーザーに敬意を持ち、コミュニティガイドラインに従いましょう
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
