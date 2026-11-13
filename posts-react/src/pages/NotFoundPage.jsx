import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function NotFoundPage() {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle className="text-lg">페이지를 찾을 수 없습니다</CardTitle>
        <CardDescription>주소를 다시 확인해 주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link to="/">홈으로</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default NotFoundPage;
