import os
import shutil

def organize_files():
    # 获取当前目录
    current_dir = os.getcwd()
    
    # 获取当前目录下的所有文件
    files = [f for f in os.listdir(current_dir) if os.path.isfile(os.path.join(current_dir, f))]
    
    # 排除脚本自身
    script_name = os.path.basename(__file__)
    files = [f for f in files if f != script_name]
    
    for file in files:
        # 分离文件名和后缀
        filename, ext = os.path.splitext(file)
        
        # 如果文件名为空（如 .gitignore 这类文件），跳过
        if not filename:
            print(f"跳过: {file}")
            continue
        
        # 创建以文件名命名的目录
        folder_path = os.path.join(current_dir, filename)
        
        # 如果目录已存在，跳过（避免覆盖）
        if os.path.exists(folder_path):
            print(f"目录已存在，跳过: {filename}")
            continue
        
        try:
            # 创建目录
            os.makedirs(folder_path)
            
            # 移动文件到新目录
            old_path = os.path.join(current_dir, file)
            new_path = os.path.join(folder_path, 'zh_Hans.json')
            
            shutil.move(old_path, new_path)
            
            # 读取文件内容并替换 & 为 \n
            try:
                with open(new_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 替换 & 为换行符
                content = content.replace('&', '\\n')
                
                with open(new_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"成功: {file} -> {filename}/zh_Hans.json (已替换 &)")
            except UnicodeDecodeError:
                # 如果不是文本文件，尝试其他编码或跳过替换
                print(f"成功: {file} -> {filename}/zh_Hans.json (无法替换，可能是二进制文件)")
            
        except Exception as e:
            print(f"错误处理 {file}: {str(e)}")

if __name__ == "__main__":
    print("开始整理文件...")
    organize_files()
    print("完成!")