import os
import json


def process_json_files(root_folder):
    # 遍历文件夹
    for root, dirs, files in os.walk(root_folder):
        for file in files:
            if file == "en.json":
                en_us_path = os.path.join(root, file)
                ru_ru_path = os.path.join(root, "ru_RU.json")

                try:
                    # 读取en_US.json文件
                    with open(en_us_path, "r", encoding="utf-8") as f:
                        data = json.load(f)

                    # 创建新字典，保持相同键但值为空字符串
                    ru_data = {key: "" for key in data.keys()}

                    # 写入ru_RU.json文件
                    with open(ru_ru_path, "w", encoding="utf-8") as f:
                        json.dump(ru_data, f, ensure_ascii=False, indent=2)

                    print(f"成功处理: {en_us_path} -> {ru_ru_path}")

                except Exception as e:
                    print(f"处理文件 {en_us_path} 时出错: {str(e)}")


if __name__ == "__main__":
    folder_path = "dr"  # 替换为你的文件夹路径
    if os.path.exists(folder_path):
        process_json_files(folder_path)
    else:
        print(f"文件夹不存在: {folder_path}")
