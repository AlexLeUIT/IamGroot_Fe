import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 '>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="GreenUIT.jpg" className="rounded-2xl object-cover" w="735" />
        </div>
        {/* image */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold ">
            Va ba cua anh la linh ma anh tung lam can bo!
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Writen by</span>
                <Link className="text-green-800">FlyCody</Link>
                <span>on</span>
                <Link className="text-green-800">Linh Tinh</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Trong trường hợp nhóm này bị điều tra bởi các cơ quan trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN),
                 tôi khẳng định mình không liên quan tới nhóm này. 
                 Tôi không rõ tại sao mình lại có mặt ở đây vào thời điểm này,
                  có lẽ tài khoản của tôi đã được thêm bởi một bên thứ ba.
                   Tôi cũng xin khẳng định rằng mình không hề giúp sức cho những hành động chống phá Đảng và nhà nước
                    của các thành viên trong nhóm này.
                     Tất cả là một mình thành viên nào đó tự dựng chuyện,
                      rêu rao nói những điều tiêu cực liên quan đến chính trị, đất nước.
            </p>
            <Link to="/test" className="text-green-800 underline text-sm">Read more</Link>
        </div>
    </div>
  )
}

export default PostListItem