function Footer() {
  return (
    <div className="bg-slate-100 p-6 mt-10">
      <h2 className="text-lg font-semibold">kakao</h2>
      <dl className="text-sm text-slate-500 p-1">
        <dt className="w-1/3 float-left">주소</dt>
        <dd>제주특별자치도 제주시 첨단로 242</dd>
        <dt className="w-1/3 float-left">사업자등록번호</dt>
        <dd>120-81-47521</dd>
        <dt className="w-1/3 float-left">통신판매업신고번호</dt>
        <dd>제2015-제주아라-0032호</dd>
        <dt className="w-1/3 float-left">호스팅서비스사업자</dt>
        <dd>(주)카카오</dd>
        <dt className="w-1/3 float-left">이메일</dt>
        <dd>friends.cs@kakaocorp.com</dd>
        <dt className="w-1/3 float-left">고객센터</dt>
        <dd>1577-6263(통화료 발생)</dd>
        {/* <dd className="pt-1 text-xs float-left after:content-['ㅣ'] after:px-2">
          ※ 전화 상담 (평일 9:00 ~ 18:00)
        </dd>
        <dd className="pt-1 text-xs float-left after:content-['ㅣ'] after:px-2">
          카카오톡 상담 (평일 9:00 ~ 18:00)
        </dd>
        <dd className="pt-1 text-xs float-left">점심시간 12:00 ~ 13:00</dd> */}
      </dl>
    </div>
  );
}

export default Footer;
