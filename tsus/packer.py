import json
import uuid
import sys

def document_to_json(input_file, output_json, mapping_file):
    """
    将文档按行转换为JSON格式，每行对应一个随机key
    
    参数:
        input_file: 输入文档路径
        output_json: 输出JSON文件路径
        mapping_file: 保存key映射关系的文件路径
    """
    try:
        # 读取输入文档
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        json_data = {}
        mapping = {}
        
        # 为每一行生成随机key
        for index, line in enumerate(lines):
            # 生成随机UUID作为key
            random_key = str(uuid.uuid4())
            # 存储行内容（保留换行符）
            json_data[random_key] = line
            # 保存映射关系（行号 -> 随机key）
            mapping[index] = random_key
        
        # 保存JSON文件
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        
        # 保存映射文件（用于还原）
        with open(mapping_file, 'w', encoding='utf-8') as f:
            json.dump(mapping, f, ensure_ascii=False, indent=2)
        
        print(f"✓ 转换成功！")
        print(f"  - JSON文件: {output_json}")
        print(f"  - 映射文件: {mapping_file}")
        print(f"  - 总行数: {len(lines)}")
        
    except FileNotFoundError:
        print(f"错误: 找不到文件 '{input_file}'")
    except Exception as e:
        print(f"错误: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("使用方法: python doc_to_json.py <输入文件> <输出JSON> <映射文件>")
        print("示例: python doc_to_json.py input.txt output.json mapping.json")
    else:
        document_to_json(sys.argv[1], sys.argv[2], sys.argv[3])