export interface Page<T> {
    pageNo: number;
    pageSize: number;
    orderBy: string;
    count: number;
    list: T[];
  }
  export interface Result {
    // code: number;
    // type: 'success' | 'error' | 'warning';
    sessionid: string;
    message: string;
    result: string;
    data?: any;
  }
  
  export interface BasicModel<T> extends Result, Recordable {
    id: string;
    page: Page<T>;
    isNewRecord: boolean;
    dataMap: Map<string, any>;
  }
  
  export interface TreeModel<T> extends BasicModel<T> {
    parentCode?: string; // 父级编码
    parentCodes?: string; // 所有父级编号
  
    treeNames?: string; // 全节点名
  
    treeSort?: string; // 排序号
    treeSorts?: string; // 所有排序号
  
    treeLeaf?: string; // 是否叶子节点
    treeLevel?: number; // 树层次级别（从0开始）
  
    childList?: T[]; // 子项列表
  
    isRoot?: boolean; // 是否根节点
    isTreeLeaf?: boolean; // 是否叶子
    isLoading?: boolean; // 是否加载中
  }
  
  export interface CmsArticle extends BasicModel<CmsArticle> {
    category: Map<string, any>;
    articleData: Map<string, any>;
    color?: string; // 标题颜色
    copyfrom?: string; // 文章来源出处
    createBy?: string; // 由谁创建
    dept?: string; // 由谁创建
    userName?: string; // 由谁创建
    createDate?: string; // 创建时间
    releaseDate?: string; // 创建时间
    customContentView?: string; // 自定义视图
    description?: string; // 描述
    hits?: number; // 点击数
    href?: string; // 外部链接
    image?: string; // 内容图片
    keywords?: string; // 关键字
    moduleType?: string; // 模块类型
    source?: string; // 来源（转载/原创）
    status?: string; // 启用状态
    title?: string; // 内容标题
    weight?: string; // 权重，越大越靠前
    weightDate?: string; // 权重期限
    updateBy?: string; // 更新人
    updateDate?: string; // 更新时间
    url?: string; // 文章链接
    wordCount?: number; // 字数（不包含html）
    viewConfig?: string; // 视图配置
  }
  export interface CmsCategory extends TreeModel<CmsCategory> {
    module?: string; // 模块类型
    name?: string; // 栏目名称
    pId?: string; // 父节点
    title?: string; // 栏目名称+模型
    adminUrl?: string; // 调用链接
    shouModes?: string; // 是否展示
    menuHref?: string; // 是否展示
  }